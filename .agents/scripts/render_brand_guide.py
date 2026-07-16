import fitz
import os

pdf_path = "attached_assets/Lulubug_Brand_Guidelines_Final_(1)_1784230818402.pdf"
out_dir = ".agents/outputs/brand-guide"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Pages: {doc.page_count}")

for i in range(doc.page_count):
    page = doc[i]
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    pix.save(f"{out_dir}/page_{i+1:02d}.png")
    print(f"Rendered page {i+1}")

doc.close()
print("Done.")
