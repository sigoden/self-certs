## create crt

mkcert help

```
Usage: mkcert <FQDN> <output>
```

```
./mkcert.sh 127.0.0.1 ./ssl
```

## verify crt

run web server which uses the certs
```
node server.js
```

verify with curl
```
curl -v -s -k --key ssl/client.key --cert ssl/client.crt https://localhost:8443
```