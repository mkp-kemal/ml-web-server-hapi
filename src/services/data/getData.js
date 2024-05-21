const { Firestore } = require("@google-cloud/firestore");

async function getData() {
    const db = new Firestore({ projectId: "submissionmlgc-kemalpasha", databaseId: "(default)" });

    const predictions = db.collection("prediction");
    const history = await predictions.get();
    const data = [];
    history.forEach((doc) => {
        const documentData = doc.data();
        const historyItem = {
            id: documentData.id,
            history: {
                result: documentData.result,
                createdAt: documentData.createdAt,
                suggestion: documentData.suggestion,
                id: documentData.id,
            },
        };
        data.push(historyItem);
    });
    return data;
}

module.exports = getData;