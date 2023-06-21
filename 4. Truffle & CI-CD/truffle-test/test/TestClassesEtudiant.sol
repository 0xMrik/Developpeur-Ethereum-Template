const ClasseEtudiant = artifacts.require("./exerciceStockage");

contract("ClasseEtudiant", accounts => {
    let instance;
    let [alice, bob] = accounts;

    beforeEach(async () => {
        instance = await ClasseEtudiant.new();
    });

    it("should add a student", async () => {
        await instance.setEtudiant(alice, "Alice", 90);
        const student = await instance.getEtudiantMap(alice);
        assert.equal(student[0], "Alice");
        assert.equal(student[1], 90);
    });

    it("should delete a student", async () => {
        await instance.setEtudiant(bob, "Bob", 85);
        await instance.deleteEtudiant(bob);
        const student = await instance.getEtudiantMap(bob);
        assert.equal(student[0], ""); // Name will be empty string after deletion
        assert.equal(student[1], 0); // Grade will be zero after deletion
    });

    it("should set a class", async () => {
        await instance.setClasse(1); // Set class to "Cinquieme"
        const classe = await instance.classe();
        assert.equal(classe, 1);
    });
});