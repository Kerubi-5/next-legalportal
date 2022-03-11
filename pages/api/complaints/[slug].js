import dbConnect from "../../../lib/dbConnect";
import Complaint from "../../../models/Complaint";

export default async function handler(req, res) {
  const {
    query: { slug },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const complaint = await Complaint.findById(slug);
        if (!complaint)
          return res
            .status(404)
            .json({ success: false, data: "Complaint not found" });
        res.status(200).json({ success: true, data: complaint });
      } catch (error) {
        res.status(400).json({ success: false, data: error.errors });
      }
      break;

    case "PUT":
      try {
        const complaint = await Complaint.findByIdAndUpdate(slug, req.body, {
          new: true,
          runValidators: true,
        });
        if (!complaint) {
          return res
            .status(404)
            .json({ success: false, data: "No complaint found to be edited" });
        }
        res.status(200).json({ success: true, data: complaint });
      } catch (error) {
        res.status(400).json({ success: false, data: error.errors });
      }
      break;

    case "DELETE":
      try {
        const deletedComplaint = await Complaint.deleteOne({ _id: slug });

        if (!deletedComplaint.deletedCount) {
          return res.status(404).json({
            success: false,
            data: "No complaint found to be deleted",
          });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
