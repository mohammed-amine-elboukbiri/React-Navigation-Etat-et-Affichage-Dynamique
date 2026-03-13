function ListeTaches() {
    const mesTaches = [
        { id: 1, nom: "Apprendre React" },
        { id: 2, nom: "Créer une application" },
        { id: 3, nom: "Tester le code" },
    ];

    return (
        <ul>
            {mesTaches.map(t => (
                <li key={t.id}>{t.nom}</li>
            ))}
        </ul>
    );
}

export default ListeTaches;