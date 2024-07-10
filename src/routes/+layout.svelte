<script>
    import "../app.css";

    export const load = async (event) => {
        return {
            session: await event.locals.getSession(),
        };
    };
</script>

<slot />
