<?php

require_once("Rest.inc.php");
class API extends REST {

private function customers(){
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}


$homepage = file_get_contents('./data_assets/girl_rating.json');

				$this->response($this->json($homepage), 200); // send user details

			$this->response('',204);	// If no records "No Content" status
		}
}


?>