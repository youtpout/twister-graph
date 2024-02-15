import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { AddLeaf } from "../generated/schema"
import { AddLeaf as AddLeafEvent } from "../generated/Twister/Twister"
import { handleAddLeaf } from "../src/twister"
import { createAddLeafEvent } from "./twister-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let client = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let commitment = Bytes.fromI32(1234567890)
    let leafIndex = BigInt.fromI32(234)
    let deposit = "boolean Not implemented"
    let timestamp = BigInt.fromI32(234)
    let newAddLeafEvent = createAddLeafEvent(
      client,
      commitment,
      leafIndex,
      deposit,
      timestamp
    )
    handleAddLeaf(newAddLeafEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddLeaf created and stored", () => {
    assert.entityCount("AddLeaf", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddLeaf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "client",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddLeaf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitment",
      "1234567890"
    )
    assert.fieldEquals(
      "AddLeaf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "leafIndex",
      "234"
    )
    assert.fieldEquals(
      "AddLeaf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deposit",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "AddLeaf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
