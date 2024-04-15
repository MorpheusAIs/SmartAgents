import lighthouse from '@lighthouse-web3/sdk'


// To create an API Key

// 1. Login into Lighthouse files dapp (https://files.lighthouse.storage/)
// 2. Go to the API key section and generate the key

export const uploadToFilecoin = async (path)=>{

    // * @param {string} path - The location of your file or folder.
    // * @param {string} apiKey - Your personal API key for Lighthouse.
    // * @param {boolean} multi - Specify if you are uploading multiple files or folders.
    // * @param {object} dealParameters - Custom parameters for file storage deals(check FVM section).
    // * @return {object} - Returns details about the uploaded file.
    
    const uploadResponse = await lighthouse.upload( 
        '/logos/forbes.svg', 
        'YOUR_API_KEY_HERE'
    )   
    /*Sample response
    {
        data: {
            Name: 'forbes.svg',
            Hash: 'QmUHDKv3NNL1mrg4NTW4WwJqetzwZbGNitdjr2G6Z5Xe6s',
            Size: '31735'
        }
    }
    */
    return uploadResponse;
}
export const checkFilecoinDealStatus = async (cid)=>{

    // * @param {string} cid
    
    const status = await lighthouse.dealStatus('bafkreia4ruswe7ghckleh3lmpujo5asrnd7hrtu5r23zjk2robpcoend34')
    /*Sample response
    {
    data: [
        {
        endEpoch: 3548449,
        chainDealID: 45479152,
        publishCID: 'bafy2bzacecy6dvmgluweqnyzouy54gspsec72djz5fghjuzay42cmyfw7rztc',
        storageProvider: 'f02620',
        dealStatus: 'Sealing: PreCommit1',
        dealUUID: '3a03de54-a4ba-4b52-be56-e010135cf530',
        startEpoch: 3030049,
        aggregateIn: '63e2cd90-db13-4fdc-a2e4-61ee5bcd4239',
        providerCollateral: '10.311 mFIL',
        lastUpdate: 1676160004130,
        pieceCID: 'baga6ea4seaqjqy5n2ru5n3ip2v6gq6z43qhbpp4jhqjy7unurxiscolooh2vyfq',
        payloadCid: 'bafybeifgbexa4kg5a3tf5kp5t7m63hr2nifi6rlnnltres4bhjl7u43ljm',
        pieceSize: 34359738368,
        carFileSize: 34091302912,
        dealId: 45479152,
        miner: 'f02620',
        content: 239214
        }
    ]
    }
    */
    return status;
}

