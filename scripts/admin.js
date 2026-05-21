async function loadAnalytics() {

    const { data, error } = await supabaseClient
        .from('page_views')
        .select('*')
        .order('views', { ascending: false });

    if (error) {

        console.error(error);
        return;

    }

    const table =
        document.getElementById('analyticsTable');

    table.innerHTML = '';

    let totalViews = 0;

    data.forEach(page => {

    totalViews += page.views;

    table.innerHTML += `

        <div
            style="
                background:white;
                border:1px solid #d4d4d8;
                border-radius:24px;
                padding:20px;
            "
        >

            <div
                style="
                    font-size:14px;
                    color:#6b7280;
                    margin-bottom:10px;
                    word-break:break-word;
                "
            >

                ${page.path}

            </div>

            <div
                style="
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    background:#00236f;
                    color:white;
                    padding:10px 18px;
                    border-radius:999px;
                    font-weight:600;
                    font-size:14px;
                "
            >

                ${page.views} visualizações

            </div>

        </div>

    `;
});

    document.getElementById('totalViews')
        .innerText = totalViews;

    document.getElementById('totalPages')
        .innerText = data.length;

    if (data.length > 0) {

        document.getElementById('topPage')
            .innerText = data[0].path;

    }
}

window.addEventListener('DOMContentLoaded', () => {

    loadAnalytics();

});