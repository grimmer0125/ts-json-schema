from jsonschema import validate

# >>> # A sample schema, like what we'd get from json.load()
# >>> schema = {
# ...     "type" : "object",
# ...     "properties" : {
# ...         "price" : {"type" : "number"},
# ...         "name" : {"type" : "string"},
# ...     },
# ... }

import json

with open('json.schema') as json_file:
    schema = json.load(json_file)
    # load from schema.json
    # schema = {
    #     "type": "object",
    #     "properties": {
    #         "size": {
    #             "description": "The size of the shape.",
    #             "minimum": 0,
    #             "type": "integer"
    #         }
    #     },
    #     "required": ["size"],
    #     "$schema": "http://json-schema.org/draft-07/schema#"
    # }

    # >>> # If no exception is raised by validate(), the instance is valid.
    validate(
        instance={
            # "requiredField": "10", exception
            "shapeField": {
                "size": 11
            }
        },
        schema=schema)

# validate(
#     instance={
#         "name": "Eggs",
#         "price": "Invalid"
#     },
#     schema=schema,
# )
