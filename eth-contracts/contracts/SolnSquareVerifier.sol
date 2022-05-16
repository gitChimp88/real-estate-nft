// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21;
import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Token{
    
    Verifier public verifierContract;
    
    constructor(address verifier_addr) ERC721Token(verifier_addr) public{
        verifierContract = Verifier(verifier_addr);
    }     

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
      uint indexOfSolution;
      address usersAddress; // person who submits the solution
    }

    // TODO define an array of the above struct
    uint numberOfSolutions = 0;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private _submittedSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint tokenID, address to);


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint input1, uint input2, address usersAddress, uint256 tokenId) public {
    bytes32 key = keccak256(abi.encodePacked(input1, input2));
    _submittedSolutions[key].indexOfSolution = tokenId;
    _submittedSolutions[key].usersAddress = usersAddress;
    // increment number of solutions
    numberOfSolutions = tokenId;
    // emit event solution added
    emit SolutionAdded(tokenId, usersAddress);
  }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSupply

    function mintNewNft(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c, 
            uint[2] memory input
            ) public returns(bool){
    // check to make sure it's unique
    bytes32 hashedSolution = keccak256(abi.encodePacked(input[0], input[1]));
    require(_submittedSolutions[hashedSolution].usersAddress == address(0), "Solution is not unique");

    // make sure proof provided is valid
    require(verifierContract.verifyTx(a, b, c, input) == true, "Solution is not valid");
    
    // handle metadata and token supply ?????
    uint256 tokenId = numberOfSolutions + 1;
    super.mint(msg.sender, tokenId);
    
    // add solution to keep track
    addSolution(input[0], input[1], msg.sender, tokenId);
    return true;
  }

}

























