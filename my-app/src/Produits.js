import React, { useMemo, useState } from "react";

function Produit(props) {
  const { titre, prix, image } = props;
  const imageSrc = `/pictures/${image}`;

  return (
    <div className="product-card">
      <img src={imageSrc} alt={titre} className="product-image" />
      <div className="product-body">
        <p className="product-title">{titre}</p>
        <p className="product-price">{prix}</p>
        <button className="btn-primary">Ajouter au panier</button>
      </div>
    </div>
  );
}

const produits = [
  { id: 1, titre: "Beginnig to end", prix: "300 DH", image: "81TgE44yT-L._UF1000,1000_QL80_.jpg" },
  { id: 2, titre: "Beyond-good-&evil", prix: "200 DH", image: "beyond-good-and-evil-9781625586100_hr.jpg" },
  { id: 3, titre: "The fall", prix: "150 DH", image: "thefall.webp" },
  { id: 4, titre: "The stranger", prix: "100 DH", image: "imas.jpg" },
  { id: 5, titre: "fighter for freedom", prix: "400 DH", image: "th3.jpg" },
  { id: 6, titre: "The Idiot", prix: "600 DH", image: "theidiot.jpg" },
  { id: 7, titre: "White Nights", prix: "100 DH", image: "whitenights.png" },
  { id: 8, titre: "Metamorphosis", prix: "100 DH", image: "metamorphosis.png" },

  

];

export default function Produits() {
  const [search, setSearch] = useState("");

  const produitsFiltres = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return produits;
    return produits.filter((p) => p.titre.toLowerCase().includes(q));
  }, [search]);

  return (
    <main className="container">
      <h1 className="main-title">Mes Produits</h1>

      <div className="products-grid">
        {produitsFiltres.map((produit) => (
          <Produit key={produit.id} titre={produit.titre} prix={produit.prix} image={produit.image} />
        ))}
      </div>

      
      <div className="search-center">
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
    </main>
  );
}
