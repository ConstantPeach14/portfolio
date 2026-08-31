from pathlib import Path

pdf_path = Path(r'C:\Users\4IR Research Lab\Desktop\portfolio\public\cv.pdf')
lines = [
    'WANANI MAMIDZA',
    'Computer Science Graduate | Software Developer',
    '',
    'Phone: 071 335 7025',
    'Email: wananiconstant@gmail.com',
    'LinkedIn: https://www.linkedin.com/in/wanani-mamidza-a02b10361',
    'GitHub: https://github.com/ConstantPeach14',
    '',
    'Education:',
    'Diploma in Computer Science | Tshwane University of Technology (TUT)',
    'NSC Bachelor Certificate | Maligana Wilson Secondary School',
    '',
    'Projects:',
    'Urban Threads Store',
    'Professional e-commerce platform for urban fashion and apparel.',
    'Live at: https://urbanthreadsstore.infinityfree.me/',
    '',
    'Authentication Demo',
    'Secure authentication and user management implementation demo.',
    'GitHub: https://github.com/ConstantPeach14/auth-demo.git',
    '',
    'Technical Skills:',
    'Java, JavaScript, HTML5, CSS3, SQL, Responsive Design, OOP, Software Testing',
    '',
    'References available upon request.'
]

# Minimal valid PDF generated with a built-in Helvetica font.
content = []
content.append('BT')
content.append('/F1 18 Tf')
content.append('50 760 Td')
for i, line in enumerate(lines):
    if i > 0:
        content.append('0 -22 Td')
    content.append(f'({line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")}) Tj')
content.append('ET')
stream = '\n'.join(content)
objects = [
    b'<< /Type /Catalog /Pages 2 0 R >>',
    b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    f'<< /Length {len(stream.encode("latin-1"))} >>\nstream\n{stream}\nendstream'.encode('latin-1'),
]

pdf = bytearray(b'%PDF-1.4\n')
offsets = [0]
for i, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf.extend(f'{i} 0 obj\n'.encode('latin-1'))
    pdf.extend(obj)
    pdf.extend(b'\nendobj\n')

xref_pos = len(pdf)
pdf.extend(f'xref\n0 {len(objects) + 1}\n'.encode('latin-1'))
pdf.extend(b'0000000000 65535 f \n')
for off in offsets[1:]:
    pdf.extend(f'{off:010d} 00000 n \n'.encode('latin-1'))
pdf.extend(f'trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n'.encode('latin-1'))

pdf_path.parent.mkdir(parents=True, exist_ok=True)
pdf_path.write_bytes(pdf)
print(f'Created {pdf_path} ({pdf_path.stat().st_size} bytes)')
