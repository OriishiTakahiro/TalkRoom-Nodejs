## WebAPIの起動方法
```sh
# MongoDBの起動
cd ./WebAPI/mongodb/
sudo docker build .
sudo docker run -d -p 27017
# APIサーバの起動
npm install
npm start
cd ..
```
## フロントサーバの起動方法
```sh
cd ./frontApp
npm install
npm start
```
