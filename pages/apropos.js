import CustomHead from "../components/CustomHead";

export default function APropos() {
  return (
    <div className="flex-column">
      <CustomHead title="À propos" />
      <h1 className="text-center title title-padding rounded">À propos</h1>
      <div className="title text-center rounded">
        <h3>Technologies utilisées</h3>
        <p> Paragraphe concerné</p>
        <h3>Fonctionnalités</h3>
        <p>Paragraphe concerné</p>
      </div>
    </div>
  );
}
