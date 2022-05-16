var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const truffleAssert = require("truffle-assertions");

contract("TestSolnSquareVerifier", async (accounts) => {
  before("setup test environment", async function () {
    this.verifier = await SquareVerifier.new(accounts);
    this.solnVerifier = await SolnSquareVerifier.new(this.verifier.address);
  });

  describe("Test soln square verifier", function () {
    const solution = {
      proof: {
        a: [
          "0x3025df94d01904d419bc600a960b43d67ab67556f709685ce5b3ef50162f8ce3",
          "0x2db872cda804508e2c293182a745f3f16733f90101f5b34d2a8a08c26c4bca79",
        ],
        b: [
          [
            "0x1d6899340a129df66ae4af3cd4979e66132f693fdcafeb8b2a9d9e17c6ffcd83",
            "0x151a6fc42a3c5fd5f0768c2a95197e3885fd09aaa802f25de0c025e36b43b6a4",
          ],
          [
            "0x0f8deb7db1dd82692e53303c947905f1e90e388d99f085e94708b795d69a137d",
            "0x2ee27657bfcaeed524c64db34d1d0feca77cbedfc71bde7fb96a93e8ea609f3e",
          ],
        ],
        c: [
          "0x1e34153036b10a91308f16327670c445abc4e9217c51a1bdf53fe5a86da8db41",
          "0x14002277f41ea9efbcbb05fc315bea7414851c12b36b227c2134d375d8b36596",
        ],
      },
      inputs: [
        "0x0000000000000000000000000000000000000000000000000000000000000019",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
      ],
    };

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("should add a new solution for contract SolnSquareVerifier", async function () {
      let id = 1;
      let input1 = 5;
      let input2 = 25;
      let owner = accounts[0];
      let added = false;
      try {
        await this.solnVerifier.addSolution(input1, input2, owner, id);
        added = true;
      } catch (e) {
        added = false;
      }
      assert.equal(added, true, "Solution don't added!");
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it("should mint new token by ERC721", async function () {
      let result = await this.solnVerifier.mintNewNft.call(
        solution.proof.a,
        solution.proof.b,
        solution.proof.c,
        solution.inputs
      );

      assert.equal(result, true);
    });

    // Test if it rejects an already existing solution
    it("should reject an existing solution", async function () {
      let error = false;
      try {
        await this.solnVerifier.mintNewNft.call(
          solution.proof.a,
          solution.proof.b,
          solution.proof.c,
          [5, 25]
        );
      } catch (err) {
        error = true;
      }
      assert.equal(error, true);
    });
  });
});
