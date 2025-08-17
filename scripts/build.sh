mkdir ./dist
mkdir ./dist/appverse-core ./dist/appverse-desktop ./dist/website

# Build website
cd ./apps/website
npm run build
cp -r ./dist ../../dist/website

cd ../..

# Build appverse core for website
cd ./apps/appverse/core
npm run build:website
cp -r ./dist ../../../dist/website/appverse

cd ../../..

# Build appverse core for desktop
cd ./apps/appverse/core
npm run build:desktop
cp -r ./dist ../desktop/dist

cd ..

# Build the desktop
cd ./desktop
npm run make
