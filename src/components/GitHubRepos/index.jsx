import React, { useEffect, useState } from 'react';
import './GitHubRepos.css'; // Coloque o CSS em um arquivo separado para organizar melhor

const GitHubRepos = ({ username }) => {
    const [repos, setRepos] = useState([]); // Estado para armazenar os repositórios
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro

    useEffect(() => {
        // Função para buscar os repositórios da API
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) throw new Error('Erro ao buscar os repositórios');
                
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Fim do carregamento
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
                <div className="repos-container" id='projetos'>
                    {repos.map((repo) => (
                        <div className="repo-card" key={repo.id}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description || 'Sem descrição'}</p>
                            <p>Linguagem: {repo.language || 'Não especificado'}</p>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </div>
                    ))}
                </div>
            );
};

export default GitHubRepos;
