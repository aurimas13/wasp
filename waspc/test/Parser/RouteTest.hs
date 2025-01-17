module Parser.RouteTest where

import Data.Either (isLeft)
import Test.Tasty.Hspec
import Wasp.Parser.Common (runWaspParser)
import Wasp.Parser.Route (route)
import qualified Wasp.Wasp.Route as RouteAST

spec_parseRoute :: Spec
spec_parseRoute =
  describe "Parsing route declaration" $ do
    let parseRoute = runWaspParser route

    it "When given a valid route declaration, returns correct AST." $ do
      let inputUrlPath = "/some/url/path"
      let inputTargetPage = "somePage"

      parseRoute
        ( "route " ++ "\"" ++ inputUrlPath ++ "\"" ++ " -> page " ++ inputTargetPage
        )
        `shouldBe` Right
          ( RouteAST.Route
              { RouteAST._urlPath = inputUrlPath,
                RouteAST._targetPage = inputTargetPage
              }
          )

    it "When given a route declaration without 'page', should return Left" $ do
      isLeft (parseRoute "route \"/url\" -> Home") `shouldBe` True
