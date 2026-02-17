function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
      />
      <h3>{country.name?.common || "No name"}</h3>
      <p><strong>Region:</strong> {country.region || "N/A"}</p>
      <p>
        <strong>Population:</strong>{" "}
        {country.population?.toLocaleString() || "N/A"}
      </p>
    </div>
  );
}

export default CountryCard;
