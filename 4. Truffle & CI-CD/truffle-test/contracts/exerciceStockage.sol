// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract ClasseEtudiant {
    
    enum Classe {Sixieme, Cinquieme, Quatrieme}
    Classe public classe;

    struct Etudiant {
        string nom;
        uint note;
    }
    
    Etudiant[] public EtudiantsArray;
    mapping (address => Etudiant) public EtudiantsMap;

    function setEtudiant(address _address, string memory _nom, uint _note) public {
        Etudiant memory nouveauEtudiant = Etudiant(_nom, _note);
        EtudiantsMap[_address] = nouveauEtudiant;
        EtudiantsArray.push(nouveauEtudiant);
    }

    function getEtudiantArray(uint _index) public view returns (string memory, uint) {
        return (EtudiantsArray[_index].nom, EtudiantsArray[_index].note);
    }

    function getEtudiantMap(address _address) public view returns (string memory, uint) {
        return (EtudiantsMap[_address].nom, EtudiantsMap[_address].note);
    }

    function deleteEtudiant(address _address) public {
        delete EtudiantsMap[_address];
        // This will leave a gap in the array and does not reduce gas costs. It's usually better to not delete elements in an array.
        for(uint i = 0; i < EtudiantsArray.length; i++) {
            if(keccak256(bytes(EtudiantsArray[i].nom)) == keccak256(bytes(EtudiantsMap[_address].nom))) {
                delete EtudiantsArray[i];
                break;
            }
        }
    }
    
    function setClasse(Classe _classe) public {
        classe = _classe;
    }
}