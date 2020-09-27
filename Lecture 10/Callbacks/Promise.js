
// let p = new Promise(function(resolve,reject){
//     console.log('Download Starts');
//     setTimeout(function(){
//         resolve();
//     },3000)
// });

// setTimeout(function(){
//     p.then(function(){
//         console.log('Finally done');
//     })
// },1000)


//------------------------------------------------------------------

// let p = new Promise(function(resolve,reject){
//     console.log('Execution starts');
//     setTimeout(function(){
//         let result = 'R';
//         resolve(result);
//     },3000)
// });

// p.then(function(result){
//     console.log('Execution completed '+result);
// })
// .catch(function(error){
//     console.log('Execution completed');
// })

//------------------------------------------------------------------

function downloadFile(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith('http')) throw new Error('Not a valid Url');
        console.log('Download Starts');
        setTimeout(function(){
            let file_name = url.split('/').pop();
            resolve(file_name);
        },3000)
    });
}

function compressFile(file_name){
    return new Promise(function(resolve,reject){
        // if(-1 == [mp4,flv,webm].indexOf( file_name.split('.').pop() ) ) throw new Error('We can only compress video files');
        console.log('Compression Starts');
        setTimeout(function(){
            compress_file_name = file_name.split('.')[0]+'.zip';
            resolve(compress_file_name);
        },3000)
    })
}

function uploadFile(compress_file_name){
    return new Promise(function(resolve,reject){
        console.log('Upload Starts');
        setTimeout(function(){
            upload_path = 'http://abc.com/'+compress_file_name;
            resolve(upload_path);
        },3000)
    })
}

downloadFile('http:example.com/file.mp4')
    .then(compressFile)
    .then(uploadFile)
    .then(function(){
        console.log('All done');
    })
.catch(function(error){
    console.log(error.message);
})

    

downloadFile('http:example.com/file.mp4')
    .then(function(file_name){
        console.log('Download completed '+file_name);
        compressFile(file_name)
            .then(function(compress_file_name){
                console.log('Compression Completed '+compress_file_name);
                uploadFile(compress_file_name)
                    .then(function(upload_path){
                        console.log('File uploaded at '+upload_path)
                    })
            })
    })
