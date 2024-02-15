import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { AddLeaf } from "../generated/Twister/Twister"

export function createAddLeafEvent(
  client: Address,
  commitment: Bytes,
  leafIndex: BigInt,
  deposit: boolean,
  timestamp: BigInt
): AddLeaf {
  let addLeafEvent = changetype<AddLeaf>(newMockEvent())

  addLeafEvent.parameters = new Array()

  addLeafEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  addLeafEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromFixedBytes(commitment)
    )
  )
  addLeafEvent.parameters.push(
    new ethereum.EventParam(
      "leafIndex",
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  )
  addLeafEvent.parameters.push(
    new ethereum.EventParam("deposit", ethereum.Value.fromBoolean(deposit))
  )
  addLeafEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return addLeafEvent
}
