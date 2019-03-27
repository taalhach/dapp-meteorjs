Posts =new Mongo.Collection('posts', { connection: null });
new PersistentMinimongo2(Posts, 'mist360');
TransferHistory=new Mongo.Collection('transferHistory', { connection: null });
new PersistentMinimongo2(TransferHistory, 'mist360');
