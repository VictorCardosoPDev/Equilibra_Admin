const supabaseUrl = 'https://xashpazesqmnqsmxtedk.supabase.co';
const supabaseKey = 'sb_publishable_5SfyNFm-5N7uSwBxcfe7gw_nfnvIFfk';

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

async function registerPageView() {

    const { error } = await supabaseClient.rpc(
        "increment_page_count",
        {
            p_path: window.location.pathname
        }
    );

    if (error) {
        console.error("Erro ao registrar acesso:", error);
    } else {
        console.log("Acesso registrado!");
    }
}

registerPageView();