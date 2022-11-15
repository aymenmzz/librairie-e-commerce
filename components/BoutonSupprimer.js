export default function BoutonSupprimer({ willDelete, decrement }) {
  return willDelete ? (
    <></>
  ) : (
    <button style={{ marginRight: 5 }} onClick={decrement}>
      -
    </button>
  );
}
