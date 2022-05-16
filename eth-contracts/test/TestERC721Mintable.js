var ERC721MintableComplete = artifacts.require("./ERC721Token");

contract("TestERC721Mintable", (accounts) => {
  let contract;
  const account_one = accounts[0];
  const account_two = accounts[1];
  const account_three = accounts[2];
  const account_four = accounts[3];

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      contract = await ERC721MintableComplete.new(account_one);

      // TODO: mint multiple tokens
      await contract.mint(account_two, 1, { from: account_one });
      await contract.mint(account_three, 2, { from: account_one });
      await contract.mint(account_four, 3, { from: account_one });
      await contract.mint(account_four, 4, { from: account_one });
      await contract.mint(account_four, 5, { from: account_one });
    });

    it("should return total supply", async function () {
      const totalSupply = await contract.totalSupply.call();
      assert.equal(
        totalSupply,
        5,
        "Total supply is returning the wrong amount"
      );
    });

    it("should get token balance", async function () {
      const balanceOfTokens = await contract.balanceOf(account_two);
      assert.equal(
        balanceOfTokens,
        1,
        "Balance of returning wrong balance amount"
      );
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      const tokenUri_one = await contract.tokenURI(1);
      const tokenUri_two = await contract.tokenURI(2);
      assert.equal(
        tokenUri_one,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
      );
      assert.equal(
        tokenUri_two,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2"
      );
    });

    it("should transfer token from one owner to another", async function () {
      const tokenId = 1;
      const from = await contract.ownerOf(tokenId);
      const to = account_three;
      await contract.transferFrom(from, to, tokenId, { from: account_two });
      const owner = await contract.ownerOf(tokenId);
      assert.equal(owner, to);
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      contract = await ERC721MintableComplete.new(account_one);
    });

    it("should fail when minting when address is not contract owner", async function () {
      let error = false;
      try {
        await contract.mint(account_two, 1, { from: account_two });
      } catch (err) {
        error = true;
      }
      assert.equal(error, true);
    });

    it("should return contract owner", async function () {
      let owner = await contract.owner.call({ from: account_one });
      assert.equal(owner, account_one, "owner should be account_one");
    });
  });
});
