<script>
    import Title from "$lib/Title.svelte";
</script>

<header>
    <nav>
        <Title />
        <div class="links">
            <a href="/users">Users</a>
            <a href="/auth/login">Login</a>
            <a href="/auth/register">Register</a>
        </div>
    </nav>

</header>
<main>
    <slot></slot>
</main>
<footer>
    Coppyright by Gossimple 2022
</footer>

<style>
    header {
        text-align: center;
        background: rgba(0,0,0,0.1)
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
</style>