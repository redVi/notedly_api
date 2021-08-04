start_api='yarn --cwd ./api dev:api'
start_front='yarn --cwd ./client dev'

echo "start dev"
$start_api & $start_front
