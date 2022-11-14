export default function BoutonSupprimer({ willDelete, decrement }) {
  return willDelete ? (
    <></>
  ) : (
    <button style={{ marginLeft: 5 }} onClick={decrement}>
      -
    </button>
  );
}
