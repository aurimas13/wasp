{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TypeApplications #-}

module Wasp.Analyzer.Evaluator.Evaluation.TypedExpr.Combinators
  ( string,
    integer,
    double,
    bool,
    declRef,
    enum,
    list,
    extImport,
    json,
  )
where

import Control.Arrow (left)
import Wasp.Analyzer.Evaluator.Evaluation.Internal (evaluation, evaluation', runEvaluation)
import Wasp.Analyzer.Evaluator.Evaluation.TypedExpr (TypedExprEvaluation)
import qualified Wasp.Analyzer.Evaluator.EvaluationError as EvaluationError
import qualified Wasp.Analyzer.Type as T
import qualified Wasp.Analyzer.TypeChecker.AST as TypedAST
import qualified Wasp.Analyzer.TypeDefinitions as TD
import Wasp.AppSpec.Core.Ref (Ref)
import qualified Wasp.AppSpec.Core.Ref as Ref
import qualified Wasp.AppSpec.ExtImport as AppSpec.ExtImport
import qualified Wasp.AppSpec.JSON as AppSpec.JSON

-- | An evaluation that expects a "StringLiteral".
string :: TypedExprEvaluation String
string = evaluation' $ \case
  TypedAST.StringLiteral str -> pure str
  expr -> Left $ EvaluationError.ExpectedType T.StringType (TypedAST.exprType expr)

-- | An evaluation that expects an "IntegerLiteral" or "DoubleLiteral". A
-- "DoubleLiteral" is rounded to the nearest whole number.
integer :: TypedExprEvaluation Integer
integer = evaluation' $ \case
  TypedAST.IntegerLiteral i -> pure i
  TypedAST.DoubleLiteral x -> pure $ round x
  expr -> Left $ EvaluationError.ExpectedType T.NumberType (TypedAST.exprType expr)

-- | An evaluation that expects a "IntegerLiteral" or "DoubleLiteral".
double :: TypedExprEvaluation Double
double = evaluation' $ \case
  TypedAST.IntegerLiteral i -> pure $ fromIntegral i
  TypedAST.DoubleLiteral x -> pure x
  expr -> Left $ EvaluationError.ExpectedType T.NumberType (TypedAST.exprType expr)

-- | An evaluation that expects a "BoolLiteral".
bool :: TypedExprEvaluation Bool
bool = evaluation' $ \case
  TypedAST.BoolLiteral b -> pure b
  expr -> Left $ EvaluationError.ExpectedType T.BoolType (TypedAST.exprType expr)

-- | An evaluation that expects a "Var" bound to a "Decl" of type "a".
declRef :: forall a. TD.IsDeclType a => TypedExprEvaluation (Ref a)
declRef = evaluation' $ \case
  TypedAST.Var varName varType ->
    case varType of
      T.DeclType declTypeName | declTypeName == expectedDeclTypeName -> pure $ Ref.Ref varName
      _ ->
        Left $
          EvaluationError.WithContext
            (EvaluationError.ForVariable varName)
            (EvaluationError.ExpectedType expectedType varType)
  expr -> Left $ EvaluationError.ExpectedType expectedType (TypedAST.exprType expr)
  where
    expectedDeclTypeName = TD.dtName $ TD.declType @a
    expectedType = T.DeclType expectedDeclTypeName

-- | An evaluation that expects a "Var" bound to an "EnumType" for "a".
enum :: forall a. TD.IsEnumType a => TypedExprEvaluation a
enum = evaluation' $ \case
  TypedAST.Var var _ -> TD.enumEvaluate @a var
  expr -> Left $ EvaluationError.ExpectedType (T.EnumType $ TD.etName $ TD.enumType @a) (TypedAST.exprType expr)

-- | An evaluation that expects a "List" and runs the inner evaluation on each
-- item in the list.
list :: TypedExprEvaluation a -> TypedExprEvaluation [a]
list elemEvaluation = evaluation $ \(typeDefs, bindings) -> \case
  TypedAST.List values _ ->
    left (EvaluationError.WithContext EvaluationError.InList) $
      mapM (runEvaluation elemEvaluation typeDefs bindings) values
  expr -> Left $ EvaluationError.ExpectedListType $ TypedAST.exprType expr

-- | An evaluation that expects an "ExtImport".
extImport :: TypedExprEvaluation AppSpec.ExtImport.ExtImport
extImport = evaluation' $ \case
  TypedAST.ExtImport name file -> pure $ AppSpec.ExtImport.ExtImport name file
  expr -> Left $ EvaluationError.ExpectedType T.ExtImportType (TypedAST.exprType expr)

-- | An evaluation that expects a "JSON".
json :: TypedExprEvaluation AppSpec.JSON.JSON
json = evaluation' $ \case
  TypedAST.JSON str -> pure $ AppSpec.JSON.JSON str
  expr -> Left $ EvaluationError.ExpectedType (T.QuoterType "json") (TypedAST.exprType expr)
