<?php
/**
 * Template Name: Le CLEE
 * Description: Page de présentation du CLEE Bordeaux Avenir
 */

get_header(); ?>

<div class="breadcrumb-container">
    <div class="container">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
            <a href="<?php echo home_url(); ?>">Accueil</a>
            <span>/</span>
            <span>Le CLEE</span>
        </nav>
    </div>
</div>

<section class="hero-section" style="background-image: url('https://picsum.photos/1920/1080');">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <h1 class="hero-title">Le CLEE Bordeaux Avenir</h1>
        <p class="hero-description">Échanges entre l'éducation et l'entreprise pour une meilleure insertion professionnelle des jeunes</p>
    </div>
</section>

<section class="section-intro">
    <div class="container">
        <div class="intro-content">
            <h2 class="section-title">Qui sommes-nous ?</h2>
            <p class="intro-text">
                Le Comité Local École-Entreprise (CLEE) Bordeaux Avenir est une instance partenariale qui rassemble 
                les acteurs de l'éducation et du monde économique du bassin bordelais. Créé pour répondre aux enjeux 
                de l'insertion professionnelle des jeunes et de l'adéquation entre formation et emploi, le CLEE fédère 
                autour de projets communs.
            </p>
            <p class="intro-text">
                Notre comité réunit deux groupes d'acteurs :
                <ul>
                    <li>Les acteurs de l'éducation et de la formation (collèges, lycées, institutionnels...)</li>
                    <br>
                    <li>Les acteurs du monde économique (entreprises, organisations professionnelles...)</li>
                </ul>
            </p>
            <p class="intro-text">
                Le CLEE Bordeaux Avenir s'inscrit dans le réseau national des Comités Locaux École-Entreprise, coordonné par 
                l'Éducation Nationale et les organisations professionnelles. Notre ancrage territorial fort nous permet d'adapter 
                nos actions aux spécificités économiques et sociales de notre bassin d'emploi.
            </p>
        </div>
    </div>
</section>

<section class="mission-section">
    <div class="container">
        <div class="mission-card">
            <h2 class="mission-title">Notre Mission</h2>
            <p class="mission-description">
                Le Comité Local École-Entreprise (CLEE) Bordeaux Avenir favorise la coopération entre les 
                établissements scolaires et le monde économique afin de soutenir l'insertion professionnelle 
                des jeunes et répondre aux besoins en compétences du territoire.
            </p>
            <p class="mission-description">
                Nous agissons pour construire des passerelles concrètes entre formation et emploi, 
                en facilitant l'accès des jeunes aux stages 
                et aux contrats d'apprentissage. Nous organisons également des événements permettant aux élèves de 
                découvrir la diversité des métiers et des parcours professionnels.
            </p>
            <p class="mission-description">
                Notre rôle est aussi d'accompagner les entreprises dans leur engagement éducatif en leur apportant 
                conseils, outils et mise en réseau. Nous veillons à valoriser les formations professionnelles auprès 
                des jeunes, des familles et du grand public, afin de faire reconnaître l'excellence et la diversité 
                des parcours qu'elles offrent.
            </p>
        </div>
    </div>
</section>

<section class="objectifs-section">
    <div class="container">
        <h2 class="section-title">Nos Objectifs</h2>
        <div class="objectifs-grid">
            <div class="objectif-card">
                <h3 class="objectif-title">Faciliter et sécuriser les stages</h3>
                <p class="objectif-description">
                    Accompagnement des élèves et des entreprises pour garantir des expériences professionnelles 
                    enrichissantes et sécurisées.
                </p>
            </div>

            <div class="objectif-card">
                <h3 class="objectif-title">Accompagner les entreprises</h3>
                <p class="objectif-description">
                    Soutenir les entreprises dans leur engagement éducatif et faciliter leur collaboration 
                    avec les établissements scolaires.
                </p>
            </div>

            <div class="objectif-card">
                <h3 class="objectif-title">Valoriser les formations professionnelles</h3>
                <p class="objectif-description">
                    Promouvoir l'excellence des formations professionnelles du bassin bordelais et leur 
                    adéquation avec les besoins du marché.
                </p>
            </div>

            <div class="objectif-card">
                <h3 class="objectif-title">Développer les projets pédagogiques innovants</h3>
                <p class="objectif-description">
                    Encourager et soutenir les initiatives pédagogiques novatrices qui préparent les 
                    jeunes aux métiers de demain.
                </p>
            </div>

            <div class="objectif-card">
                <h3 class="objectif-title">Promouvoir les métiers et secteurs locaux</h3>
                <p class="objectif-description">
                    Faire découvrir la richesse et la diversité des métiers et secteurs d'activité 
                    du territoire bordelais.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="sub-pages-section">
    <div class="container">
        <h2 class="section-title">En savoir plus</h2>
        <div class="sub-pages-grid">
            <a href="<?php echo home_url('/bureau-membres'); ?>" class="sub-page-card">
                <h3 class="sub-page-title">Les Membres</h3>
                <p class="sub-page-description">
                    Découvrez les membres et leurs rôles
                </p>
                <span class="sub-page-cta">En savoir plus →</span>
            </a>

            <a href="<?php echo home_url('/nos-actions'); ?>" class="sub-page-card">
                <h3 class="sub-page-title">Nos Actions</h3>
                <p class="sub-page-description">
                    Consultez nos différentes actions et projets en cours
                </p>
                <span class="sub-page-cta">En savoir plus →</span>
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
