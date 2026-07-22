// =============================
// LOGIN
// =============================

async function login(email, password) {

    const { data, error } = await supabaseClient.auth.signInWithPassword({

        email,
        password

    });

    if (error) {

        alert(error.message);
        return false;

    }

    return true;
}



// =============================
// VERIFICAR SESSÃO
// =============================

async function verificarAutenticacao() {

    const { data } = await supabaseClient.auth.getUser();

    if (!data.user) {

        window.location.href = "../index.html";

    }

}



// =============================
// LOGOUT
// =============================

async function logout() {

    await supabaseClient.auth.signOut();

    window.location.href = "../index.html";

}