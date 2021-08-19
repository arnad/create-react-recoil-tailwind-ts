parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path/.."
. .env
curl $API_DEFINITION_URL > swagger.json && npx openapi-generator-cli generate -i swagger.json -o src/client -g typescript-axios