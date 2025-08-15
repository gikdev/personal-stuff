cd apps/website
npm run build

cd ../..
cp -r ./apps/website/dist ./dist

cd apps/appverse
npm run build

cd ../..
cp -r ./apps/appverse/dist ./dist/appverse

explorer .
