mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
  var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
  var admin = db.getSiblingDB('admin');
  admin.auth(rootUser, rootPassword);

  db = db.getSiblingDB('notedly');

  var user = '$DB_USERNAME';
  var passwd = '$DB_PASSWORD';

  db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
  db.users.insert({
    "username": "jack",
    "email": "some@mail.com",
    "password": "123",
    "avatar": "https://avatarko.ru/img/kartinka/2/fantastika_drakon_1323.jpg"
  });
EOF
