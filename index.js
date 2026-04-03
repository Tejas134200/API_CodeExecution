import express from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import cors from "cors"



const app = express();
app.use(express.json());
app.use(cors())

const tempDir = path.join(process.cwd(), "temp");

app.post("/run", (req, res) => {
  const { code, input, language } = req.body;
//   if(req.body) console.log("Req reciever"+code+input+language) 

  const fileName =
    language === "cpp"
      ? "main.cpp"
      : language === "python"
      ? "main.py"
      : "Main.java";

  fs.writeFileSync(path.join(tempDir, fileName), code);
  fs.writeFileSync(path.join(tempDir, "input.txt"), input);

  exec(
    `docker run --rm \
    -e LANGUAGE=${language} \
    -v ${tempDir}:/app \
    --memory=100m \
    --cpus=0.5 \
    --network=none \
    code-runner`,
    (err, stdout, stderr) => {
      if (err) {
        return res.json({ error: stderr || err.message });
      }
      res.json({ output: stdout });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));