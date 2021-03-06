var Verifier = artifacts.require("Verifier");

contract("TestVerifier", (accounts) => {
  const owner = accounts[0];

  const correctProof = {
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

  const correctProof1 = {
    proof: {
      a: [
        "0x0d3aa6cdf44130e461257eba1d0a784c3c708710e164bbc107e0598cc925e1dd",
        "0x07b03a0fa90f0363fb48647533669089051516653d870e52439eef240d9ab7ee",
      ],
      b: [
        [
          "0x2d489abe4ab3a0f7155f28f4f9cdf9d84d7ef94a3c224ddcceff2243314a2b7f",
          "0x064e6c4766873c815bc5f4c10929f86e4739b03a7faa4b3846b37625046933a3",
        ],
        [
          "0x2718981cb4a50e4a4dec5b0fdd744959e6575a7ccc98207c12f3a8ffab9c00fd",
          "0x1c26f5ddc104d797eab507253bfbfd4260298ed7e66610b7a79e80eb4091e658",
        ],
      ],
      c: [
        "0x12db86b1b48972085591fe4ca7f53a4e0e6037f0a4f0d69565dcd60b966f2209",
        "0x0fbd0d7276ab5f271784c3cbb88e6e4a2974cec37e449513aa836e04457abecf",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000024",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof2 = {
    proof: {
      a: [
        "0x24317e374c4f7cb32ff9ee2fd18a01f01653b7af616d3cac093eeb12c81141e0",
        "0x15644bfc545a62053243a40420dc71398a8292e86a94dff405f556981f07d28c",
      ],
      b: [
        [
          "0x109c6581a68dc519851a6135b22ef224d13a1c250820aca3a431a52d6eecc2f2",
          "0x179a1e604908b49f354a4e3471a47f56f7a015d77706fcf495c596f666467bfb",
        ],
        [
          "0x048f248c8bb81291afa9ca63b90d758ae7c3f53a569403c32c2ffc93ebeefd5b",
          "0x151df6e78b66d643aba6a300e68581b19faadad18bf8857f46fdb533431525c3",
        ],
      ],
      c: [
        "0x178e38243a4d47fcc94863e2c16874ae6f213b30330b7d976ea2dc4e0c9b4be0",
        "0x21a855561d9a63dad0066933c053a2f6c29a936641baabc279f0a9b174c4adcc",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000031",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof3 = {
    proof: {
      a: [
        "0x0b529ae43159e5b5cb411bd9409df7819ab1a1f52ccde0942dbf623c8d37c25c",
        "0x2b2f16a727455a50ce021e5d6503e99ea0dfe31ca247eb0179c4420d3480f75b",
      ],
      b: [
        [
          "0x1a0a3f267f977805891889915912e703c83ff8aa48acb8bbd04ded1fa48740d4",
          "0x1b2ebb7168d8fd36a2040b1264c7b39d23f57d414fb612769edd75b3cdca87dc",
        ],
        [
          "0x18f37207251517a919445425dfcd3d8e9b55a4b6edd7632e41dd9c207489cf24",
          "0x1d106fe1d27629f559510ae9ed2d75c276dcc71405880e82e68da66e5f36ac73",
        ],
      ],
      c: [
        "0x2371611b157de8eada40d9dd7aa2ff051d2159cf2f841f0a1a66813074258c72",
        "0x22a72c46859c4579376e7b2694ae75cc36e3c731f55e81d6639ebd5ca643503c",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000040",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof4 = {
    proof: {
      a: [
        "0x096947d616e46673d2a949411096d735a86890ee1fd168af776190bdb7b6b698",
        "0x26210889b63608117a326e39d7dd0a92f3593a7234d69e529cad25e7afc081c1",
      ],
      b: [
        [
          "0x06ce7bce55675288aea899796b80ba7f0e4ab88d6399238545846a4ca3d616c3",
          "0x2ec809c36c53a7ac106d8197fdedf92418728a85ef0968471ab8c20051992a41",
        ],
        [
          "0x2e64fccf5e46276987a1d3a4c1f86d64ce2e89613dcf9896823e65cf6d917249",
          "0x2ee42bbe218740ddc04f0df50dc17b7ba262901122ffab54eacf41c54ea0c8ae",
        ],
      ],
      c: [
        "0x27d6547156d0c8121b245b260ad13f6acba537dfa142886d001df954b087622f",
        "0x1ed314e86b2f5ab97f368cdbbafcde96e659acae5e9f9a1efdc1e4188db7e570",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000051",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof5 = {
    proof: {
      a: [
        "0x11b08edb642a46c8286ad4e7767a8ce4bdc9688993e566961b985447ea385d5a",
        "0x197e2aefcaa882f731ac4a215a628a7ce01744edceeb2ddd2c88896d4a0e8cee",
      ],
      b: [
        [
          "0x2d11c06618c39cc84b363daf249f43f89e6fcaa4c4986b9610f00b08a063078b",
          "0x0d49defefe994e7d5c9cfe42beba2e50a807178de88ff7f2b8b84fb1b090a280",
        ],
        [
          "0x2c2f1f03ce9694a6f87b1aa0c82949995e27035668a3f41928bb17c2eb4ce0f7",
          "0x06164fb35262228a88f929064bd789d37f2b94a05e9c583df41d83dc402e057e",
        ],
      ],
      c: [
        "0x15836fbb02457aa4c468898fb926803813086de5370fae53b2e63361c8785d39",
        "0x1487664a5e3baef26f697a7dcce747fd91ec01c7828bc1e417e7e8e00dc6c812",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000064",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof6 = {
    proof: {
      a: [
        "0x21b6bdbd34e8621b5ebe8bda087ff3a1a7c74209cba7d5cd7e9f3887ebe96bb2",
        "0x2105ef81390dafafaaec09a0c2cfa577ed2069490d4a8fde0bd297e44a3154db",
      ],
      b: [
        [
          "0x10d2fc0fffbdd76be7319d5d340e36807c14560c3f7c4079dc70fbd868ad3335",
          "0x1cc008340c84ff1c50fda9a06f7d6f9b6bb3295e47a7fe760ff760e571ac21c9",
        ],
        [
          "0x2e76b6b5e62a3355ceb3b678e2a424f493e1dcc0d845b4f9ec82bdfb7a13ef6d",
          "0x2e1558066830853b5e689c6c8d0799bd91e333cf7aff6dfc49a4f0663d39969e",
        ],
      ],
      c: [
        "0x29935485f2f24b34dfad431572e542f099e32ff85147be6dc95e08d7feba3980",
        "0x18bc361405aef5c5ff550d080880da3a1c423e49704897b6aa06d2d55ba08cb2",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000079",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof7 = {
    proof: {
      a: [
        "0x2ff385f13599d2e0f4511daadb50eb1e98968f676bda3e9179874f46c898b999",
        "0x0a9f26368d617d4cacbc7cb00eae1bd761b3c263bf7ae9ddf1b6d862e80c0a2e",
      ],
      b: [
        [
          "0x14f98b9771a07d86f35b6a7c9c6a493be6964d4b5cd8aae54a6600bd26cffc8f",
          "0x2b028909f1c3db745cf1bc41bfac57d20c3d96bb70f623ea7c56c61f3c267b7b",
        ],
        [
          "0x12c806b2af49d9f9869731e1bed92aa2ee900d049e4951f6b20cdd5a28c1f3f7",
          "0x0e335185a38b9862e478e66975232267eeeb35e4727f99bd94a5a7218e7ba926",
        ],
      ],
      c: [
        "0x1bf5a7cf370f89b62e4eb7ac3e811780ee2645cf42848cbbb6abbd13564850cf",
        "0x23f2d5c3459ff9ccf493e53fb7ded4c4f321607a9838f5cce645bb09bdf30061",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000090",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof8 = {
    proof: {
      a: [
        "0x024fdf678cd954c9146577b8ff2e54747b3b26317b04b32cc424607348d11f36",
        "0x089032b1fe30248ffdc5c062935f1175c2674d5892bfe409f77d9fc6cc96cf0c",
      ],
      b: [
        [
          "0x136f7309274035254102813054a93157a2f3c8c14079c2bdea2b0b21a9d95cc3",
          "0x0724904bf5707ade5845105244462188360fb78a8f67c4dda2a912ceeeb59963",
        ],
        [
          "0x153230ee5028bab97a70884c1e55621c2e9721368eb33ff6e38edd6dc44dcca9",
          "0x2473ce8ca344e557c45481ca86fee8132f5c5a298070db343b35d0fa2b22bf2d",
        ],
      ],
      c: [
        "0x0ea783c1f033f53eccbf68e1a6ff623340304cf16420c00cd443d47e0ef3d666",
        "0x24079260f7b7057b62adca747d63e7fe570125bf52ddcc90c11af33681fd7d92",
      ],
    },
    inputs: [
      "0x00000000000000000000000000000000000000000000000000000000000000a9",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof9 = {
    proof: {
      a: [
        "0x15cbbe4e69da1b38f0f269fe3d0c613d7371df9c8a2c1808589b78f5464e4ec9",
        "0x1f03d4667e9e762b6694bb5183606a304692d2ad99d21cbb698edf68077721e3",
      ],
      b: [
        [
          "0x10e0d071b91eaaddd1d68a5ddc747fbe5fe9be4779dd5b1bdbf8246fb56dbf94",
          "0x0f32b79fc6cb1f2702be697876de37692e15ebaa7f398bfb1f25a8b00db43f30",
        ],
        [
          "0x156be0773bd7cd0093e43ffef509732f0a293dc1c769adf1b0ed47960de0997a",
          "0x18315dc16f6ad2287dc9d63b3be370ba38cdcd2ba4317470a9a78748a9c8c2f4",
        ],
      ],
      c: [
        "0x118094c257638e80e7d317f59a26a3afb31a255cda7337dfd7fe086c72ede5ee",
        "0x28996853480ad5406fcff62883b6b649883b6f5e60cb7836541bb9de9708ad7e",
      ],
    },
    inputs: [
      "0x00000000000000000000000000000000000000000000000000000000000000c4",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const correctProof10 = {
    proof: {
      a: [
        "0x0ff54cdf3e43b22114778cb3285a4623ce1b50525d4f4527af147cc2053794d9",
        "0x1ef4c8c729ab20857d8db8b6ca9a790a69f6d7010d6ac3396167a17deb104e1c",
      ],
      b: [
        [
          "0x19adeeffa41586c4cab2af40e0f8adc326fbab41ac2e046873473408d79686d5",
          "0x2a49f2fa075f79e6b175d294d33b0d42cf1d808a265f84887ca59113e4e9bd8f",
        ],
        [
          "0x007aa7beaece9dc470bebaa5f1692c69e17c47667719f4e5cffb633b4eee8877",
          "0x2eee71439eea3a10e2dbe6a2c6be8ce9fd8049c1978f4a82bc94b1a78b9f6ee4",
        ],
      ],
      c: [
        "0x22e10b25d0b0bcd23a9b8e5254e026acbef8e8b9c2c46d02db4f0342c9965fd6",
        "0x1941e1c77613b550decf66c6bacbe2965c02e705db33a3a838591522487f06af",
      ],
    },
    inputs: [
      "0x00000000000000000000000000000000000000000000000000000000000000e1",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  };

  const incorrectProof = {
    proof: {
      a: [
        "0x2cbd9c0ddb4a53881121ea65b5bf3fbf2e4951a8f8577690373dcc5b3be7076a",
        "0x0191b99f530b3d30dfd7b08e8d40e9fb951a5a0f8275146ee093b8d5ecef22e7",
      ],
      b: [
        [
          "0x1d6df8f799f74c17543810e5d3d489257922beefcca4204f8820b09b0b7fa479",
          "0x04da0a838cbf7d0f433e1b9e0fcb47901c7a57a0c999cdf36b5eed8c9a3ca614",
        ],
        [
          "0x100252b1f59c69e49ac989293cc5935a821690975860b60528076451f0abd148",
          "0x292ccfbc6210b17eb411ddb38ea79b829fba0841d71aebd435eafaf46dae57dc",
        ],
      ],
      c: [
        "0x09cca0768838bc349ba8188d75c0eefd96141fd03faadb32ea578dec71185789",
        "0x0742cea7d464cfc071dda5418068970d20889691258ba45252106dc35a3772ca",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000003",
      "0x0000000000000000000000000000000000000000000000000000000000000003",
    ],
  };

  describe("testing verifier", function () {
    beforeEach(async function () {
      this.contract = await Verifier.new({ from: owner });
    });
    it("test correct proof", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof.proof.a,
        correctProof.proof.b,
        correctProof.proof.c,
        correctProof.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof1", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof1.proof.a,
        correctProof1.proof.b,
        correctProof1.proof.c,
        correctProof1.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof2", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof2.proof.a,
        correctProof2.proof.b,
        correctProof2.proof.c,
        correctProof2.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof3", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof3.proof.a,
        correctProof3.proof.b,
        correctProof3.proof.c,
        correctProof3.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof4", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof4.proof.a,
        correctProof4.proof.b,
        correctProof4.proof.c,
        correctProof4.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof5", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof5.proof.a,
        correctProof5.proof.b,
        correctProof5.proof.c,
        correctProof5.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    it("test correct proof6", async function () {
      let result = await this.contract.verifyTx.call(
        correctProof6.proof.a,
        correctProof6.proof.b,
        correctProof6.proof.c,
        correctProof6.inputs
      );

      assert.equal(result, true, "Proof should be correct");
    });

    // Test verification with incorrect proof
    it("test incorrect proof", async function () {
      let result = await this.contract.verifyTx.call(
        incorrectProof.proof.a,
        incorrectProof.proof.b,
        incorrectProof.proof.c,
        incorrectProof.inputs
      );

      assert.equal(result, false, "Proof should be incorrect");
    });
  });
});
