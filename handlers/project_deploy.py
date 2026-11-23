# KingxTech KX Cloud Console - Project Route Handler
from http import HTTPStatus
import json
import os

def handle_project_deploy(event, context):
    """
    Handles automated deployment routing for projects served at
    site.kingxtech.name.ng/<project-name>/
    """
    try:
        body = json.loads(event.get("body", "{}"))
        project_name = body.get("project_name")
        
        if not project_name or not project_name.isalnum():
            return {
                "statusCode": HTTPStatus.BAD_REQUEST,
                "body": json.dumps({"error": "Invalid or missing project name."})
            }

        # Target endpoint generation following KingxTech standards
        deployment_path = f"/var/www/site.kingxtech.name.ng/{project_name}"
        os.makedirs(deployment_path, exist_ok=True)

        return {
            "statusCode": HTTPStatus.OK,
            "body": json.dumps({
                "message": "Project route successfully provisioned.",
                "endpoint": f"https://site.kingxtech.name.ng/{project_name}/"
            })
        }
    except Exception as e:
        return {
            "statusCode": HTTPStatus.INTERNAL_SERVER_ERROR,
            "body": json.dumps({"error": str(e)})
        }
