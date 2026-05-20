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

            <tr class="border-t border-outline-variant">

                <td class="px-6 py-4 text-on-surface-variant">

                    ${page.path}

                </td>

                <td class="px-6 py-4">

                    <div class="
                        inline-flex
                        items-center
                        justify-center
                        min-w-[60px]
                        px-4
                        py-2
                        rounded-full
                        bg-primary
                        text-white
                        font-semibold
                        text-sm
                    ">

                        ${page.views}

                    </div>

                </td>

            </tr>

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