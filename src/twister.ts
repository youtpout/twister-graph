import { AddLeaf as AddLeafEvent } from "../generated/Twister/Twister"
import { AddLeaf } from "../generated/schema"

export function handleAddLeaf(event: AddLeafEvent): void {
  let entity = new AddLeaf(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.client = event.params.client
  entity.commitment = event.params.commitment
  entity.leafIndex = event.params.leafIndex
  entity.deposit = event.params.deposit
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
