// ==========================
// CONTADOR DE ACESSOS
// ==========================

let acessos =
    Number(
        localStorage.getItem("acessosResilia")
    ) || 0;

acessos++;

localStorage.setItem(
    "acessosResilia",
    acessos
);

// ==========================
// VERIFICA AVALIAÇÃO
// ==========================

verificarAvaliacao();

function verificarAvaliacao(){

    const avaliacaoRespondida =
        localStorage.getItem(
            "avaliacaoRespondida"
        );

    const avaliacaoAdiada =
        Number(
            localStorage.getItem(
                "avaliacaoAdiada"
            )
        ) || 0;

    if(

        !avaliacaoRespondida &&

        acessos >= 5 &&

        acessos >= avaliacaoAdiada

    ){

        setTimeout(()=>{

            abrirModalAvaliacao();

        },1500);

    }

}

// ==========================
// MODAL
// ==========================

function abrirModalAvaliacao(){

    const modal =
        document.getElementById(
            "modalAvaliacao"
        );

    if(modal){

        modal.classList.remove("hidden");

    }

}

function lembrarDepois(){

    localStorage.setItem(

        "avaliacaoAdiada",

        acessos + 5

    );

    document
        .getElementById(
            "modalAvaliacao"
        )
        ?.classList
        .add("hidden");

}

function responderAvaliacao(){

    localStorage.setItem(

        "avaliacaoRespondida",

        true

    );

    document
        .getElementById(
            "modalAvaliacao"
        )
        ?.classList
        .add("hidden");

    window.open(
        "LINK_DO_FORMS",
        "_blank"
    );

}