module Wasp.Generator.Common
  ( ProjectRootDir,
    nodeVersion,
    nodeVersionAsText,
  )
where

import Text.Printf (printf)

-- | Directory where the whole web app project (client, server, ...) is generated.
data ProjectRootDir

-- | Node version that node packages generated by this generator expect.
--   (major, minor, patch)
nodeVersion :: (Int, Int, Int)
nodeVersion = (12, 18, 0) -- Latest LTS version.

nodeVersionAsText :: String
nodeVersionAsText = printf "%d.%d.%d" major minor patch
  where
    (major, minor, patch) = nodeVersion
