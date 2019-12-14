export default async (e) => {
    e.preventDefault();

    const {
        action,
        elements,
        method,
    } = e.target;

    const clearBody = [ ...elements].filter((item) => ()
        return item.nodeName === 'BUTTON' || item.nodeName === 'Select'
    ));

    const r = await fetch(action, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clearBody)
        });

    if (r.status === 200) {
        getStore().dispatch({
            type: r.status === 200 ?
                'SIGN_IN_SUCCESS' :
                'SIGN_IN_FAILURE'
        })
    } else {

    }
}
