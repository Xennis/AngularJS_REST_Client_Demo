var server = require('json-server');

server.low.db = {
	"people": [
        {
            "id": 1,
            "first_name": "Bart",
            "last_name": "Simpson",
			"phone_number": 0123456789
		},
        {
            "id": 2,
            "first_name": "List",
            "last_name": "Simpson",
			"phone_number": 0450509334
        }
	],
	"facilities": [
		{
			"id": 1,
			"name": "Santa School",
			"street": "Main street",
			"street_number": 32,
			"post_code": 4249
		},
		{
			"id": 2,
			"name": "Krusty Burger",
			"street": "Fake street",
			"street_number": 12,
			"post_code": 23242
		}
	]
};

server.listen(3000);