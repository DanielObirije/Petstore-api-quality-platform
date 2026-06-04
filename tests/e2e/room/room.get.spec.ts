import createroomBody from "../../helpers/room/createroombody.helper";
import validateJsonSchema from "../../helpers/validateJsonSchema";
import shemahelperFunciton from "../../helpers/schemaHelperFunciton";
import { RoomClient } from "../../resources/clients/RoomClient";
import { expect, test } from "@playwright/test";

const roomClient = new RoomClient();
     

test.describe("GET /api/rooms/{id}", () => {

})