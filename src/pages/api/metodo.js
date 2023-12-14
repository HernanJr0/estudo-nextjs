const metodo = (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({
            tipo: "Adão"
        })
    }else {
        re.status(200).json({
            tipo: "Eva"
        })
    }


}

export default metodo