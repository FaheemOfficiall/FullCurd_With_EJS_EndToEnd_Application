import studentModel from '../model/studentModel.js'

class studentController {
    //create doc
    static createDoc = async (req, res) => {
        try {
            let { name, age, fees } = req.body
            const doc = new studentModel({
                name,
                age,
                fees
            })
            //saving document
            await doc.save()
            res.redirect('/student')
        } catch (error) {
            console.log('err in creation doc');
        }
    }
    //create doc completed

    //read document

    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find()
            console.log(result);
            res.render('index', { data: result })

        } catch (error) {
            console.log('err in read doc');
        }
    }

    //read document completed
    //read document end


    static editDoc = async (req, res) => {
        // console.log(req.params.id);

        try {
            const result = await studentModel.findById(req.params.id)
            // console.log(result);
            res.render('edit', { result })

        } catch (error) {

        }
    }

    // update start

    static updateDoc = async (req, res) => {
        try {
            await studentModel.findByIdAndUpdate(req.params.id, req.body)

            res.redirect("/student")
        } catch (error) {
            console.log('err update');
        }
    }


    static deleteDoc =async (req, res) => {
try {
    await studentModel.findByIdAndDelete(req.params.id)
    res.redirect('/student')
    console.log("user Deleted");
} catch (error) {
    console.log("err in deleting User");
}


    }

}


export default studentController