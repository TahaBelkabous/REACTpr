// Composant Produit (واحد المنتج)
function Produit(props) {
  const { titre, prix, image } = props;
  const imageSrc = "pictures/" + image;

  return (
    <div className="product-card">
      <img src={imageSrc} alt={titre} className="product-image" />
      <div className="product-body">
        <p className="product-title">{titre}</p>
        <p className="product-price">{prix}</p>
        <button className="btn-primary">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

// Tableau des produits
const produits = [
{
 id: 1,
 titre: 'Formation en HTML',
 prix: ' 300 DH',
 image : 'img_html.jpg'
 },
 {
 id: 2,
 titre: 'Formation en CSS',
 prix: '500 DH',
 image : 'img_css.jpg'
 },
 {
 id: 3,
 titre: 'Formation en JavaScript',
 prix: '500 DH',
 image: 'img_js.jpg'
 },
 {
 id: 4,
 titre: 'Formation en ReactJs',
 prix: '700 DH',
 image: 'img_react.jpg'
 },
 ]; 



// Composant Produits (liste)
export default function Produits() {
  return (
    <main className="container">
      <h1 className="main-title">Mes Formations en Ligne</h1>

      <div className="products-grid">
        {produits.map((produit) => (
          <Produit
            key={produit.id}
            titre={produit.titre}
            prix={produit.prix}
            image={produit.image}
          />
        ))}
      </div>
    </main>
  );
}