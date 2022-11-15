import CustomHead from "../components/CustomHead";

export default function APropos() {
  return (
    <div className="flex-column text-center">
      <CustomHead title="À propos" />
      <h1 className="text-center title title-padding rounded">À propos : </h1>
      <div className="title rounded a-propos">
        <h2>Technologies utilisées</h2>
        <h3>NextJS</h3>
        <p>
          J&lsquo;ai utilisé NextJS via les fonctionnalités suivantes : <br />
          <br />- Le Server Side Rendering {"(affichage côté serveur)"} pour que
          la récupération des données s&lsquo;effectue pendant le chargement de
          la page. De cette manière, j&lsquo;ai évité la latence classique que
          l&lsquo;on rencontre en utilisant le hook useEffect et la méthode
          fetch pour la récupération de données. <br />
          <br />- Le file based routing {"(routage par les fichiers)"} pour
          simplifier la création de routes statiques et dynamiques. Plutôt que
          d&lsquo;utiliser les composants de React-Router-Dom, la création
          d&lsquo;un fichier à un emplacement spécifique crééra la route
          automatiquement.
        </p>
        <h3>ReactJS</h3>
        <p>
          J&lsquo;ai utilisé ReactJS via les fonctionnalités suivantes :
          <br />
          <br />
          - Le hook useEffect pour récupérer le contenu du panier qui a été
          sauvegardé dans le localStorage.
          <br />
          <br />- Le hook useState pour récupérer et traiter le texte inscrit
          dans la barre de recherche sous forme de variable d&lsquo;état{" "}
          {"(state)"}.
          <br />
          <br />
          - Les composants pour pouvoir écrire du code de manière dynamique et
          ne pas me répéter inutilement.
          <br />
          <br />- Les props pour passer des données à mes composants React.
        </p>
        <h3>ReduxJS</h3>
        <p>
          J&lsquo;ai utilisé ReduxJS via les fonctionnalités suivantes :
          <br />
          <br />
          - La fonction combineReducers pour mettre en commun plusieurs
          reducers.
          <br />
          <br />- Le hook useSelector pour accéder aux différentes variables
          d&lsquo;état {"(state)"} traitées par le reducer.
          <br />
          <br />- Le hook useDispatch pour lancer différentes actions qui
          modifieront les différentes variables d&lsquo;état {"(state)"}.
          <br />
          <br />- Le hook useStore pour accéder au panier juste après avoir été
          modifié et ainsi pouvoir le sauvegarder dans le localStorage
          directement.
        </p>
      </div>
    </div>
  );
}
