

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ('Pat', 'Paggi', 1 , 1),
('Tylor', 'Paggi', 1,2),
  ('John', 'Doe', 2, 1),
  ('Charles', 'Dickson', 1,2),
  ('Katherine', 'Roe', 1,2),
  ('Dora', 'Exporer', 2, 1),
  ('Edward', 'Scorrors', 2, 1),
  ('Morgan', 'Coal', 1,2),
  ('Santa', 'Claus', 1,2),
  ('Bob', 'Man', 1,2);

INSERT INTO role (tilte, salary, department_id)
VALUES ("Manager", 125000.00,1),
("Sales",50000.00, 1),
("Owner", 26400.00, NULL);


INSERT INTO department (name)
VALUES ('Outsales');
