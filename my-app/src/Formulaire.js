export default function Formulaire() {
    

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Formulaire d'inscription</h2>

      <form className="p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            placeholder="Entrez votre nom"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Entrez votre email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
